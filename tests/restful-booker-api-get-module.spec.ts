import { test, expect } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";
import resfullApiData from "../testdata/resful-booker-data.json";

test(
  "[restful booker] verify that the uer is able to fetch all the booking Ids using GET API and receives valid response",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test case link",
      description: "URL of the link",
    },
  },
  async ({ request }) => {
    const bookingIdsRes = await request.get(apiPathData.booking_path);
    const bookingIdsJson = await bookingIdsRes.json();
    console.log(bookingIdsJson);

    expect(bookingIdsRes.status()).toBe(200);
    expect(bookingIdsRes.statusText()).toBe("OK");
    // expect(bookingIdsRes).toBeTruthy()
    expect(bookingIdsRes.headers()["content-type"]).toBe(
      resfullApiData["content-type"],
    );
    expect(bookingIdsJson).not.toBeNull();
  },
);

test(
  "[restfull booker] verify that the user is able to fetch booking details for a booking id using GET API and receives valid response",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test case link",
      description: "Test Case URL",
    },
  },
  async ({ request }) => {
    const bookingRes = await request.get(
      `${apiPathData.booking_path}/${resfullApiData.booking_Id}`,
    );
    const bookingJsonRes = await bookingRes.json();
    console.log(bookingJsonRes);

    expect(bookingRes.status()).toBe(200);
    expect(bookingRes.statusText()).toBe("OK");
    expect(bookingJsonRes).not.toBeNull();
    //expect(bookingJsonRes.firstname).toEqual(resfullApiData.firstname);
  },
);
