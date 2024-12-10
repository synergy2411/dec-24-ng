# Break Timing -

Tea break - 12:00 (15 mins)
Lunch - 1:30 (45 mins)
Tea break - 3:30 (15 mins)

# What is JavaScript?

- Type-less / Dynamically typed
- Client side (Browser) as well Server side (NodeJS) Scripting Language
- Compiled as well as Interpreted
- Reduces Server side load
- Single Thread
- Fast & Light-weighted
- DOM Manipulation
- Versatile
- Non blocking / Asynchronous Programming

MEAN Stack : Mongo Express Angular Node
MERN Stack : Mongo Express React Node

# JavaScript Datatypes

- Primitive types : String, Number, Boolean
- Reference types : Array, Object, Functions, Date

NextJS : Server side implementation

- React : Client side App

# TypeScript

- Type safe
- JavaScript with Type Definition
- OOPS Concepts

# Other JavaScript Libraries / Frameworks

- React (30-35kb): render the UI quickly and efficiently. Components, VDOM, State, Props etc
- jQuery : DOM Manipulation; Animation, AJAX
- Backbone : Client side MVC
- \*Vue : Progressive framework; "Evan You"
- \*Ember : very frequent API changed. Older than even Angular
- Knockout : MVVM Pattern and two way data binding
- Stencil : Component based architecture
- Polymer : Custom web components
- AngularJS : v1.x; Library
- \*Angular : latest version; State Management, XHR Call, Template, Components, client side MVC, SPA etc

# AoT Compiler - Ahead-of-Time Compiler

- "Tree-Shaking": removes unnecessary code from final build;
- Reduces the app size by atleast 40%
- Loads on the browser very quick due to less size

# Install Angular CLI tool

- npm install -g @angular/cli@17
- ng version
- ng new frontend --no-standalone --routing=false
  > CSS
  > No for Server Side Rendering (SSR)
- cd frontend
- npm start

# Angular CLI Commands

- ng generate component path/comp-name
- ng g c path/comp-name
- ng g c components/users
- ng g c components/users/user-image
- ng g c components/users/user-info
- ng g c components/playground/life-cycle-demo
- ng g d directives/highlight
- ng g p pipes/country-code

# to install bootstrap

> npm install bootstrap

# Data Binding

- Property Binding : [ ]
- Event Binding : ( )
- Two way Data Binding : [( ngModel )] - FormsModule

# Nested Component Communication

- @Input()
- @Output() + EventEmitter

# Content Projection: <ng-content>

# Component Life Cycle

- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

# Decorators

- @HostBinding() - binds host element property
- @HostListener() - bonds the host element event

# Pipes: used to format the data on UI

- Built-in pipes
- Custom Pipes
  : Pure - for pure changes
  : Impure - for pure as well impure changes: NOT Efficient

Pure Change : Changing the reference
let todoCollection = [];
todoCollection = [newValues];

Impure Change : Changing the values

let todoCollection = [];
todoCollection.push(newItem);
