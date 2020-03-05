# Bull-E-Season (•_•) ( •_•)>⌐■-■ (⌐■_■)
***

## Description
Bull-E Season is driving game, it's all about your skills - navigate ("Bully") your way through traffic at full speed. 
Dodge and swerve through slow driving cars and avoid accidents at all costs. 

## Overview
* Game gets harder(faster) as longer you are on the road - as it gets harder you will accumilate points faster as well. 
* As you zoom thorugh the traffic your handling(lane changing speed) increases.


## Live
Play the game live [here!](https://mahmudahmed.github.io/Bull-E-Season/)

## Functionality & MVP
With this driving game, drivers will be able to test their skills on the road. 

* Start and Restart game.
* Change lanes, move up and backwards.
* NPC cars on the road.
* Collisons with cars on the road ends the game.
* Scoreboard keeping score. 
* Gets faster after certain points. 


## Spec Details
* Player can move car left, right, up and down with arrow keys. 
* Points will increase as time passes. 
* Winning -> Just as in life, you never win when you drive like a maniac...you only get closer to your demise 
◕_◕

## Timeline
* Day#1 -> Create shell for the game. 
* Day#2 -> Functionality/logic and design


## Languages and Technologies

* Vanilla JavaScript
* HTML5/ CSS3

## Code Snippets
![collision_function](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/collision.png)

Use conditional logic to return false for conditions where I know the two object cannot be colliding. Then if those conditions aren't true I had the function return true. I use this function in other functions to check for the collision of different game objects so I know what actions should be done.

![storeing_data_locally](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/settingLocalHighScore.png)
Checking to see current score is greater that the local high score, if it is set the local storage fore "highScore" to be later retrived. 

## Functional Version
![Design](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/final.png)


## Prototype/Wireframe
![Wireframe](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/wireframe.png)

## Future considerations

* More intricate animations and effects.
* More varieties of themes and levels.
