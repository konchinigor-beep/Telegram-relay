import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { channel } = await request.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      return NextResponse.json({ success: false, error: "Bot token not configured" }, { status: 500 });
    }

    if (!channel) {
      return NextResponse.json({ success: false, error: "Channel name is required" }, { status: 400 });
    }

    // Запрос к Telegram API для проверки админов
    const botInfoRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const botInfo = await botInfoRes.json();

    if (!botInfo.ok) {
      return NextResponse.json({ success: false, error: "Invalid bot token" }, { status: 400 });
    }

    const botId = botInfo.result.id;

    const adminsRes = await fetch(`https://api.telegram.org/bot${token}/getChatAdministrators?chat_id=${channel}`);
    const adminsData = await adminsRes.json();

    if (!adminsData.ok) {
      return NextResponse.json({ 
        success: false, 
        error: "Не удалось получить список администраторов. Убедитесь, что бот добавлен в канал и является администратором." 
      });
    }

    // Проверяем, есть ли наш бот в списке администраторов
    const isAdmin = adminsData.result.some((admin: any) => admin.user.id === botId);

    if (isAdmin) {
      return NextResponse.json({ success: true, message: "Бот успешно подтвержден как администратор канала!" });
    } else {
      return NextResponse.json({ success: false, error: "Бот не является администратором этого канала." });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}
