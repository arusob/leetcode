
const attendanceReward = require('./student-attendance-record-I');

test('Print a single number without duplicate', () => {
    expect(attendanceReward("PPALLP")).toEqual(true)
    expect(attendanceReward("PPALLL")).toEqual(false)
});
