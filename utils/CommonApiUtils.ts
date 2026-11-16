import { APIRequestContext } from "@playwright/test";
import apiPathData from "../testdata/api-path-data.json";

export default class CommonAPiUtils {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  public async createToken() {
    const createTokenRes = await this.request.post(apiPathData.auth_path, {
      data: {
        username: process.env.RB_USERNAME,
        password: process.env.RB_PASSWORD,
      },
    });

    const createTokenJsonRes = await createTokenRes.json();
    return createTokenJsonRes.token;
  }
}
