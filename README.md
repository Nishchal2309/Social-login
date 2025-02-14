
# What this project does ?

- Integrates with auth0, implements a social login through google.
Authentication of the user is taken care by auth0 in the background after auth0 takes the user to a universal login page.

- Project also takes care of authorization of the user. 
Uses Auth0Provider component on react frontend side from where it requests for a set of predefined scopes in a token.
Through this approach, the user always requests the same set scopes and this approach is good for basic apps

# Enhancement ??

- For the future, we could add a dynamic approach when it comes to requesting scopes.
Which means creating different roles (Viewer, Editor, Admin) and actions on auth0 dashboard.
We can assign different permission scopes to each of these roles. And the token can be dynamically requested
from the frontend on the basis of which user has logged in. This approach gives us more flexibility and security.
