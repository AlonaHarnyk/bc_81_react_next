import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { User } from "@/types/user";

interface GetUserByIdParams {
  params: Promise<{ id: string }>;
}

export const GET = async (
  request: NextRequest,
  { params }: GetUserByIdParams,
) => {
  try {
    const { id } = await params;
    const { data } = await api.get<User>(`/users/${id}`);
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
