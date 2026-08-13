import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../../api';

interface GetContactByIdParams {
  params: Promise<{ id: string }>;
}

export const GET = async (
  request: NextRequest,
  { params }: GetContactByIdParams
) => {
  try {
    const { id } = await params;
    const { data } = await api.get(`/contacts/${id}`);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
};
