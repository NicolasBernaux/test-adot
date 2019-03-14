const TestGeocode = function(event, result ,index = 0) {
  if (RegExp(`${result[index].lat}[0-9]+`).test(event.lat)) { // test lat

    if (RegExp(`${result[index].lon}[0-9]+`).test(event.lon)) { // test lon

      if (event.event_type === 'click') // if event is equal to click

        result[index].clicks = result[index].clicks + 1 || 1;
      else {
        result[index].impressions = result[index].impressions + 1 || 1;
      }
    } else if (index+1 < result.length ) { // if long is not equal
      TestGeocode(event, result, index+1);
    }
  } else if (index+1 < result.length ) { // if lat is not equal
    TestGeocode(event, result, index+1); // recursive until find or until index is equal to result
  }
};

module.exports = TestGeocode;
