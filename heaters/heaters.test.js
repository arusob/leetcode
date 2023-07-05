
const whereHeaters = require('./heaters');

test(' return the minimum radius standard of heaters so that those heaters could cover all houses ', () => {
    expect(whereHeaters([1,2,3], [2])).toEqual(1)
    expect(whereHeaters([1,2,3,4], [1,4])).toEqual(1)
    expect(whereHeaters([1,5], [2])).toEqual(3)
});
