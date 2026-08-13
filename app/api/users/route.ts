import { User } from "@/types/user";
import { api, ApiError } from "../api";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { data } = await api.get<User[]>("/users");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status },
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { data } = await api.post<User>("/users", body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status },
    );
  }
};
