## differences between interfaces and types in TypeScript
### Interface 
- Interface can be merged or redeclared
- Interface mainly uses object & classes
- use extends keywards to join two classes
### Type
- type can be redeclared
- it can be used primitives and do union (|)
- use (&) this

## What is the use of the keyof keyword in TypeScript? Provide an example
 
-keyof in TypeScript is used to get a union of all property names (its called keys) of a type or interface
-Keyof gives us the type safe
-interface Person{
    name: string;
    age : number
}

type PersonKeyValue = keyof Person;

## Explain the difference between any, unknown, and never types in TypeScript.
### any
- it define the type can be any or no check
- Basically we turn of the Typescript power
- int x : any
### Unknown 
- when we dont know the type we use Unknown
- its safer than any. because we must check the type before using (type gaurd)
- int x = true;
- x = 'opar' : unknown
- if (typeof x === "string") {
  x.toUpperCase(); 

} 
### never
- its a type that never happen
- use when something will never return
## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
- Enum is defined to set the name of a constant.
- Its a Object property
- basically its used for set role , status etc
- if we use a Large code base then we should use Enum in a centralized position.Then we dont need to change the code for every page.
- Ex enum UserRole {
   Admin = "Admin",
   Editor = " Editor",
   Customer = "Customer"
}

- let role : UserRole = UserRole. Admin ;

## Provide an example of using union and intersection types in TypeScript.
### Union
- Union is the value of several type
- combined by (|) this operator
- type ID = string | number;
let Userid : ID;

### Intersection
- Combined multiple type in one
- use & this operator
- when we need the type in one type then we use it
- interface Role{
  Admin : "Admin"
}
interface EditRole{
  Editor : "editor"
}
type UserRole = Role & EditRole ;
