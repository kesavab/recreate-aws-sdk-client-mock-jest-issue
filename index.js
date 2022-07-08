import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";

export const somef = async () => {
  const sns = new SNSClient({});
  const result = await sns.send(
    new PublishCommand({
      TopicArn: "arn:aws:sns:us-east-1:111111111111:MyTopic",
      Message: "My message",
    })
  );

  console.log(`Message published, id: ${result.MessageId}`);
  return result.MessageId
};
