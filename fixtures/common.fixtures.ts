import { test as baseTest } from "@playwright/test";
import CommonAPiUtils from "../utils/CommonApiUtils";

type CommonTypeFixtures = {
  commonApiUtils: CommonAPiUtils;
};

baseTest.extend<CommonTypeFixtures>({
  commonApiUtils: async ({ request }, use) => {
    use(new CommonAPiUtils(request));
  },
});
