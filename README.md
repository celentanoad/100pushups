# 100 Pushups

This app is based off of the 100 pushups training program from: https://hundredpushups.com/

## The purpose of this app

The website is outdated and runs poorly on mobile. I want to create a version that I can use on my phone for easy access and tracking my progress.

## The actual program (breakdown by week):
1. Initial test- how many til fail
2. 3 days per week
   1. 3 columns, depending on the initial test results. Maybe initially include all 3, and have a filter or a way to highlight the correct column?
   2. Include a timer for 60 seconds
   3. 5+ sets (depends on week), rest between each set (length depends on the day/week), clickable check mark to toggle each set as Done
3. List out each week, and when the week is completed can select Done. 
4. When taking tests: track the date of the test and the maximum amount completed

General Structure:
- Initial test
- Week 1
- Week 2
- Redo initial test
- If total is <16 then go back to week 2
- Week 3
- Week 4
- Redo initial test
- If total is <31 then go back to week 4
- Redo initial test
- If total is > 45, move on to week 6
- Week 6

App structure:
Progress at top (day/week)
Results of last test
Button for each week, when clicked will go to a page with Day 1, 2, 3
The button for the current week will be highlighted
The button for the current day will be highlighted
If the day/week has been completed, display a check mark
After clicking the correct day, show a table with the sets, and all columns but the one to follow based on test results will have a colored border
The first row is highlighted, a button that says "start rest" which will start a timer, when the timer is over the start turns to "rest longer" which will start the timer again, and a button appears below that says "next set", the previous row will become grey and the next row is highlighted
After the last row, show a button that says "Complete day"# 100pushups


To Do:
- add completion toggles for each day/week
- Maybe have a highlight animation when timer is over
- Highlight each row depending on current set
- Maybe add in a filter to only show the table based on current result?
- Some indication after weeks 2, 4, and 5 to redo the endurance test (don't allow continue until its done)
- Something that keeps track of what day or week you are on? (last completed?)