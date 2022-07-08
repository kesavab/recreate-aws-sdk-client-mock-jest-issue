import { mockClient } from "aws-sdk-client-mock";
import {somef} from './index.js'
import { SNSClient } from '@aws-sdk/client-sns';

describe("test", () => {
  let snsMock;

  beforeEach(() => {
    snsMock = mockClient(SNSClient);
  });
  test("dummy", async () => {
    snsMock.resolves({
      // default for any command
      MessageId: "12345678-1111-2222-3333-111122223333",
    });
    let b=await somef()
    expect(b).toBe("12345678-1111-2222-3333-111122223333")
  });
});
