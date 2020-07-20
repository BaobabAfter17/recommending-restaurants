Recommending Alogrithm
1. every restaurant have a n-dimention vector (profile) representing its properties (style, price range, spicy rate, etc.) 
2. each property is scored between 0 - 10
3. the vector (profile) for restaurant should be fixed as long as its menu stays unchanged
4. the vector is a wholesome description / abstraction of the restaurant in mathematical manner
i.e. all we know about the restaurant are shown as numbers in such a vector
5. each user have his/her own preferences for properties. User's preference is very much like a restaurant's profile.
6. suppose each user's preferences is fixed, we could approaching / gradually guessing his/her preferences by
7. starting with an arbitrary value (maybe median value), and modifying it through user actions (like / dislike / ...)
8. we recommend restaurants which are most similar to user's profile from neaby restaurant pools
9. similarity is difined as Cosine Similarity