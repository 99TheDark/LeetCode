class Solution:
    months = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    def dayOfYear(self, date: str) -> int:
        year = int(date[:4])
        month = int(date[-5:-3])
        day = int(date[-2:])

        count = day
        for i in range(month - 1):
            count += Solution.months[i]

        # Leap year
        if month > 2 and year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
            count += 1

        return count
