# Bull-E-Season (•_•) ( •_•)>⌐■-■ (⌐■_■)
***

## Description
Bull-E Season is a driving game, it's all about your skills on the road - navigate ("Bully") your way through traffic at full speed. 
Dodge and swerve through slow driving cars and avoid accidents at all costs. 

## Overview
* Game gets harder(faster) as longer you are on the road - as it gets harder you will accumilate points faster as well. 
* As you zoom thorugh the traffic your handling(lane changing speed) increases.
* You accumulate more points when you put the pedal to the metal.
* Unlock cars as you score higher and higher.
* Certain cars boost your points in different ways. 

## Live
Play the game live [here!](https://mahmudahmed.github.io/Bull-E-Season/)

## Functionality & MVP
With this driving game, drivers will be able to test their skills on the road. 

* Start and Restart game.
* Choose a car to drive.
* Change lanes, move up and backwards.
* NPC cars on the road.
* Pause/Resume game.
* Collisons with cars on the road ends the game.
* Scoreboard keeping score (points increase faster in some events)
* As you accumulate more and more points, game speeds up.


## Spec Details
* Player can move car left, right, up and down with arrow keys. 
* Points will increase as time passes.
* Winning -> Just as in life, you never win when you drive like a maniac...you only get closer to your demise 
◕_◕

## Timeline
* Day#1 -> Create shell for the game. 
* Day#2 -> Functionality/logic and design
* Day#3 -> Additional functionality.


## Languages and Technologies

* Vanilla JavaScript
* HTML5/ CSS3

## Code Snippets

![car_selection](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/carSelection.png)

Swipe through your garage and slect your car, certain cars become unlocked when specifc highscore is set.

![background-animation](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/line-car-animation.png)

Excluding players car, there are a totat of 4 NPC cars on the road. Through every animation loop, the css style postion is set to animate down the cars by the speed level. Once it goes all the way down it's top is set -200px and placed randomly horizontally then brought down again (with a randomly generated RGB color). Giving the illusion of a new car. Same goes for the center lines.

![collision_function](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/collision.png)

Use conditional logic to return false for conditions where I know the two object cannot be colliding. Then if those conditions aren't true I had the function return true. I use this function in other functions to check for the collision of different game objects so I know what actions should be done.

![scoring_logic](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/scoring-logic.png)

Here lies the scoring logic of the game, the score is originally set to increase by 1 every 20 loops. When you move up during the game...the score increases by 1 every single loop. When you use unlocked cars you your scorce also gets a boost, depending on the car selected. 

![storeing_data_locally](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/settingLocalHighScore.png)
Checking to see current score is greater that the local high score, if it is set the local storage fore "highScore" to be later retrived. 

## Functional Version
![Design](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/final.png)


## Prototype/Wireframe
![Wireframe](https://github.com/MahmudAhmed/Bull-E-Season/blob/master/dist/wireframe.png)

## Future considerations

* Leaderboard
* More intricate animations and effects.
* More varieties of themes and levels.
