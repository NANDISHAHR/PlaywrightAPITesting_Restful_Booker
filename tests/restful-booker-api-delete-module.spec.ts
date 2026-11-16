import { expect, test, type APIRequestContext } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";
import resfullApiData from "../testdata/resful-booker-data.json";
import CommonAPiUtils from "../utils/CommonApiUtils";

test(
  "[Restful Booker] - Verify that the user is able to Delete existing booking data using delete api",
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

    const deleteBookingRes = await request.delete(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id3}`,
      {
        headers: {
          Cookie: `token=${tokenValue}`,
        },
      },
    );

    expect(deleteBookingRes.status()).toBe(201);
    expect(deleteBookingRes.statusText()).toBe("Created");

    const getBookingRes = await request.get(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id3}`,
    );
    expect(getBookingRes.status()).toBe(404);
    expect(getBookingRes.statusText()).toBe("Not Found");
  },
);
