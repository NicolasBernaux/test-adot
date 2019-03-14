const TestGeocode = function(event, json ,index = 0) {
  if (RegExp(`${json[index].lat}[0-9]+`).test(event.lat)) { // test lat

    if (RegExp(`${json[index].lon}[0-9]+`).test(event.lon)) { // test lon

      if (event.event_type === 'click') // if event is equal to click

        json[index].clicks = json[index].clicks + 1 || 1;
      else {
        json[index].impressions = json[index].impressions + 1 || 1;
      }
    } else if (index+1 < json.length ) { // if long is not equal
      TestGeocode(event, json, index+1);
    }
  } else if (index+1 < json.length ) { // if lat is not equal
    TestGeocode(event, json, index+1); // recursive until find or until index is equal to result
  }
};

module.exports = TestGeocode;
