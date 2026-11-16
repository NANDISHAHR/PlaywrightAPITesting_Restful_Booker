import { expect, request, test } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";
import resfullApiData from '../testdata/resful-booker-data.json'

test(
  "[Restful Booker] - Verify that the user is able to create new booking using post api and recive valid response",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test case link",
      description: "Test case URL",
    },
  },
  async ({ request }) => {
    const createBookingRes = await request.post(apiPathData.booking_path, {
      data: resfullApiData.create_booking,
    });
    const createBookingJsonRes = await createBookingRes.json()
    console.log(createBookingJsonRes)

    expect(createBookingRes.status()).toBe(200)
    expect(createBookingJsonRes.booking).toMatchObject(resfullApiData.create_booking)
  },
);
