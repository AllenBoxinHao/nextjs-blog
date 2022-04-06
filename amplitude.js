import * as Amplitude from "@amplitude/node";

const client = Amplitude.init("0862b194ec86df95bb1f1d601b401d53");

client.logEvent({
  event_type: "Node.js Event",
  user_id: "datamonster@gmail.com",
  location_lat: 37.77,
  location_lng: -122.39,
  ip: "127.0.0.1",
  event_properties: {
    keyString: "valueString",
    keyInt: 11,
    keyBool: true,
  },
});
