import { OkPacket, RowDataPacket } from "mysql2";
import { connect } from "../db";
import { IDean } from "../interfaces/database/IDean";

export async function getDean(_id: IDean["_id"]): Promise<IDean | null> {
  const conn = connect();
  if (!conn) return null;
  const [dean] = (await conn.query("SELECT _id FROM deans WHERE _id = ?", [
    _id,
  ])) as RowDataPacket[];
  return dean[0] as IDean;
}

export async function createDean(dean: IDean): Promise<IDean | null> {
  const conn = connect();
  if (!conn) return null;
  const [result] = (await conn.query("INSERT INTO deans SET ?", [
    dean,
  ])) as OkPacket[];
  return result.affectedRows > 0 ? { ...dean, _id: result.insertId } : null;
}
