"use client";

import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("home");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: 30,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 4px 20px rgba(0,0,0,.08)",
        }}
      >
        <h1 style={{ marginTop: 0 }}>Relay</h1>
        <p>Telegram Channel Scheduler</p>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid #ddd",
            margin: "24px 0",
          }}
        />

        <h2>Панель управления</h2>

        <div style={{ display: "grid", gap: 12 }}>
          <button
            onClick={() => setSection("schedule")}
            style={buttonStyle}
          >
            <b>Расписание</b>
            <br />
            Запланированные публикации
          </button>

          <button
            onClick={() => setSection("channels")}
            style={buttonStyle}
          >
            <b>Каналы</b>
            <br />
            Подключение Telegram-каналов
          </button>

          <button
            onClick={() => setSection("history")}
            style={buttonStyle}
          >
            <b>История</b>
            <br />
            Результаты отправки
          </button>
        </div>

        {section !== "home" && (
          <div
            style={{
              marginTop: 24,
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 12,
              background: "#fafafa",
            }}
          >
            {section === "channels" && (
              <>
                <h2>Telegram-каналы</h2>
                <p>
                  Здесь будем подключать каналы, в которых бот является
                  администратором.
                </p>

                <input
                  placeholder="@имя_канала"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: 12,
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    fontSize: 16,
                  }}
                />

                <button
                  style={{
                    marginTop: 12,
                    padding: "12px 20px",
                    border: 0,
                    borderRadius: 8,
                    background: "#111",
                    color: "#fff",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  Проверить канал
                </button>
              </>
            )}

            {section === "schedule" && (
              <>
                <h2>Расписание</h2>
                <p>Здесь будем создавать запланированные публикации.</p>
              </>
            )}

            {section === "history" && (
              <>
                <h2>История</h2>
                <p>Здесь будут отображаться отправленные публикации.</p>
              </>
            )}

            <button
              onClick={() => setSection("home")}
              style={{
                marginTop: 20,
                padding: "10px 16px",
                border: "1px solid #ccc",
                borderRadius: 8,
                background: "#fff",
                cursor: "pointer",
              }}
            >
              ← Назад
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

const buttonStyle = {
  width: "100%",
  textAlign: "left",
  padding: 18,
  border: "1px solid #ddd",
  borderRadius: 10,
  background: "#fff",
  cursor: "pointer",
  fontSize: 16,
};
