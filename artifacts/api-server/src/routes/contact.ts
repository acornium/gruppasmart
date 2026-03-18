import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactFormBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const parsed = SubmitContactFormBody.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        error: "Invalid input",
        details: parsed.error.message,
      });
      return;
    }

    const { name, email, phone, investorType, investmentVolume, message, requestType } = parsed.data;

    const [contact] = await db
      .insert(contactsTable)
      .values({
        name,
        email,
        phone: phone ?? null,
        investorType: investorType ?? null,
        investmentVolume: investmentVolume ?? null,
        message: message ?? null,
        requestType,
      })
      .returning({ id: contactsTable.id });

    res.json({
      success: true,
      message: "Ваша заявка успешно отправлена. Мы свяжемся с вами в течение 1 рабочего дня.",
      id: contact.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      error: "Internal server error",
      details: "Не удалось обработать заявку. Пожалуйста, попробуйте позже.",
    });
  }
});

export default router;
