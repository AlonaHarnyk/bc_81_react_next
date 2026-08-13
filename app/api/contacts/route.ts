import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../api';

export const GET = async (request: NextRequest) => {
  try {
    const hasWork = request.nextUrl.searchParams.get('hasWork');
    const { data } = await api.get('/contacts', { params: { hasWork } });
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
