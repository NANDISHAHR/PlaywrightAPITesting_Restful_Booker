import { expect, test, type APIRequestContext } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";
import resfullApiData from "../testdata/resful-booker-data.json";
import CommonAPiUtils from "../utils/CommonApiUtils";

test(
  "[Restful Booker] - Verify that the user is able to Update existing partial booking data using patch api Basic Authentication and receive valid response",
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

    const updateBookingRes = await request.patch(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id2}`,
      {
        headers: {
          Cookie: `token=${tokenValue}`,
        },
        data: resfullApiData.partial_update,
      },
    );

    const updateBookingJsonRes = await updateBookingRes.json();
    console.log(updateBookingJsonRes);

    expect(updateBookingRes.status()).toBe(200);
    expect(updateBookingJsonRes.firstname).toMatch(
      resfullApiData.partial_update.firstname,
    );
    expect(updateBookingJsonRes.lastname).toMatch(
      resfullApiData.partial_update.lastname,
    );
  },
);
