# calc-challenge
The following was a code challenge a buddy sent to me. This repo is my answer.

##### Background
You've been asked to build a pricing engine that prints out the estimated policy price for a given person. Keep in mind that this is an MVP that may fail once we launch, or could grow into a large application with very complex pricing rules. Try to strike a balance between creating an application that will be maintainable as it grows, with spending too much time building something that may end up failing. Please use whatever language you’re comfortable with.  For best results, use a vanilla language, not a framework as this will force modeling, OO and will allow you to showcase your design decisions.

##### Challenge
The base cost of insurance is $100 annually.
For every 5 years over the age of 18 years old, the base price increases by $20. In this calculation, life insurance is only available for people over the age of 18.
Certain health conditions increase the cost of insurance:
+ Condition | Relative cost increase
+ Allergies | 1%
+ Sleep Apnea | 6%
+ Heart Disease | 17%
+ Females have a longer life expectancy, so receive a $12 discount on the final price.

##### Expected input
First Name | Age | Gender | Health Conditions
Kelly | 50 | female | Allergies
Josh | 40 | male | Sleep Apnea
Brad | 20 | male | Heart Disease
