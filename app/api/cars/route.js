import { db } from "@/lib/db";

export async function GET() {
  try {
    const result = await db.execute(`
      SELECT *
      FROM cars
      ORDER BY id DESC
    `);

    return Response.json(result.rows);
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}