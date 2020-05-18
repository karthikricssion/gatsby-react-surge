### Gatsby Learning
Trying out gatsby from scratch. Following the docs, The reason for choosing gatsby, It runs on ReactJs, Which i haven't worked much in that, So that i can experiments a lots of React stuff by learning. 

Updated Surge [Demo](https://dirty-mark.surge.sh/)

### Things Learned
1. Setup the gatsby environment
2. About Surge 

### Surge [surge.sh](https://surge.sh/) 
To deploy or publish a static site to web in few steps using surge. Login or create a account by typing in terminal

```
surge login
```

Then check your email and verify your account. Next go to the directory via terminal and type

```
surge or 
surge <public directory path>
```

you will see

```
Running as <YOUR_EMAIL> (Student)

        project: public
         domain: <PUBLISHED_DOMAIN_URL>
```
Once you get this, you need to press ```Enter`` to deploy it to the domain.

Below are some usefull **surge** commands
```
suge list // Will list all the domains, time, status
surge teardown <PUBLISHED_DOMAIN_URL> to remove.
surge --domain <PUBLISHED_DOMAIN_URL> <PUBLIC_FOLDER> // to update the site
```

### Ref
https://www.gatsbyjs.org/tutorial \
https://www.gatsbyjs.org/docs/modifying-a-starter \
https://surge.sh/