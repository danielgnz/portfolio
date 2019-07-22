const mySkills = `
HTML
CSS
JavaScript
TypeScript 
React.js 
Node.js 
Redux.js 
REST 
PostgreSQL 
Redis 
MongoDB 
GraphQL 
AWS 
Firebase 
Docker 
SASS 
Next.js 
Git
Continuous Integration
Continuous Delivery
UI/UX
Linux
Windows
Debugging
Problem Solving
Analytical
Business Development
Shopify
Digital Marketing
E-Commerce
Communication
Testing
`

export const skills = mySkills
  .split(`\n`)
  .filter(skill => skill.length > 0)
  .sort()
