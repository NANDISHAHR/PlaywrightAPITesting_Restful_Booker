import { expect, test, type APIRequestContext } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";
import resfullApiData from "../testdata/resful-booker-data.json";
import CommonAPiUtils from "../utils/CommonApiUtils";

test(
  "[Restful Booker] - Verify that the user is able to Update existing booking using put api Authorization and receive valid response",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test case link",
      description: "Test case URL",
    },
  },
  async ({ request }: { request: APIRequestContext }) => {
    const updateBookingRes = await request.put(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id}`,
      { data: resfullApiData.update_booking },
    );

    const updateBookingJsonRes = await updateBookingRes.json();
    console.log(updateBookingJsonRes);

    expect(updateBookingRes.status()).toBe(200);
    expect(updateBookingJsonRes).toMatchObject(resfullApiData.update_booking);
  },
);

test(
  "[Restful Booker] - Verify that the user is able to Update existing booking using put api Basic Authentication and receive valid response",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test case link",
      description: "Test case URL",
    },
  },
  async ({ request }) => {
    const commonAPiUtils = new CommonAPiUtils(request);
    const tokenValue = await commonAPiUtils.createToken();

    const updateBookingRes = await request.put(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id}`,
      {
        headers: {
          Cookie: `token=${tokenValue}`,
        },
        data: resfullApiData.update_booking,
      },
    );

    const updateBookingJsonRes = await updateBookingRes.json();
    console.log(updateBookingJsonRes);

    expect(updateBookingRes.status()).toBe(200);
    expect(updateBookingJsonRes).toMatchObject(resfullApiData.update_booking);
  },
);
