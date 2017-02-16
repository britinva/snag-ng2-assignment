# Snagajob Job App Assignment

This is my attempt at doing the Snagajob assignment, effectively applying for my own job :)

## Assignment Description

The assignment can be found [here](https://docs.google.com/document/d/1Z6CDpLgkDlyDQky0zaKMd6Z73BnkohVz5wm9wzhYaFM/) as long as you are on a Snagajob network. In summary:

> Managers want to be able to browse, sort, and filter job applications they receive on a web dashboard that they can use across a variety of devices. They should be able to inspect an individual application to see more details as well as flag applications to look at later or revisit. When the manager comes back to the application, this list should still be available to them.

## My approach

I first built out a pure-html prototype to get a feel for how the app would look and feel. I settled on a card-based list view design that would then expand into a detail view on tap. The thinking was that this would work well on mobile devices and meant I didn’t have to create multiple pages (and avoided routes). I built my first working template in `app.component.html` and `app.component.ts`, dumping all the data and classes that modeled a Job Application into one file. 

## Componentizing

Once this was done, it made mapping out my components pretty straight forward, I created a summary view and a detail view. Since the detail view needed to do a lot of the same things the summary did one could inherit the other. The only functionality I needed at the component level was faving and unfaving applications so I created simple methods that change the fave state in memory, coming back to storing the information later.

## Pipes!
The first challenge I decided to tackle was the text filtering, after some [searching](http://jilles.me/ng-filter-in-angular2-pipes/) [around](http://ngmigrate.telerik.com/custom-pipes-angular-2#creating-a-custom-pipe) it seemed like Pipes would be a good solution (though that’s definitely debatable!). Once I got the hang of the Pipes syntax it was pretty easy to use typescripts filter function to reduce the result set down.

After this I moved onto sorting. Since I needed the user to select one of a few pre-defined sorting methods I had to create a dropdown that bound to a variable in the component. This variable was then passed to the pipe witch uses a switch statement to decide which of the various sorting algorithms it needed to run and return.

It seems that filtering and sorting pipes can be [extremely expensive](https://angular.io/docs/ts/latest/guide/pipes.html#!#no-filter-pipe) operations and may not be the best solution in the long run for this app. That said, the concept of Pipes was new to me and I wanted to see how they worked. I also had to modify the pipes a little once the data wasn’t instantly loaded.

## Services

Now that I had something of a working app, it was time to move the data out of the app component and into a service. After finding a few articles on how to [emulate an API](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html) I decided to actually move the JSON file to a gist on github. I liked that this allowed me to grab my data from the Web and deal with the intrinsic latency that comes with such an operation.

I then heavily borrowed from the [Services section](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html) of the Angular Heroes Tutorial and created Promises to fetch the data into the app and pass it to my componenet. I then remembered that promises weren’t cool any more and I should be using Observables so off I went to do [more research](https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html).

Converting my service to observables was probably the biggest learning curve of the entire project since this is the crux of Reactive programming and is quite a paradigm shift when you aren’t working with it every day. I used some of my time traveling to and from Maryland to read up on [Reactive Programming principles](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) to wrap my head around it. There’s also a very useful Swift-focused series written by our own [Casey Liss](https://www.caseyliss.com/2016/12/15/rxswift-primer-part-1). Clay may also have helped.

## Local storage

The last requirement I needed to implement was the starred/faved applications that needed to be saved across session. I knew I wanted to use localStorage for this and I actually referenced our PokeApp training project from last year to get started. Once I figured out how to read and write from localStorage it actually became fairly simple to create the whole service.

The last tricky part was just hooking up the list of saved apps with the data being returned from the API. For this I reworked my `getApplications` method in the app component, nesting one subscription inside another (once you retrieve application data, go get the fave data) and then calling a method that iterates through the list of applications with each fave in the array. There might be a more efficient way to do this, but it works!

## Final touches

After (manually) testing that the app worked, it was time to apply the final touches. I spent a little while playing with the UI to get it looking somewhat decent, unfortunately I had to kill my dream of creating a few animated effects. I deleted files that the CLI created in my project that I wasn’t using (ie, all the unit testing files). I removed code that I had developed but no longer needed and added a lot of comments. Then I created a github repo (something I should have done FIRST) and worked on this readme.

Overall I probably spent about *16-20 hours* developing this solution, but it was an excellent exercise for wrapping my head around Angular 2. I feel I have a much deeper understanding for the benefits, philosophies and architectural decisions that are required in an ng2 project and hopefully that will show as I carry out code reviews in the future.

_CH_