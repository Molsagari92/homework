import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Test";
  menuPoints = Array.from(
    new Set(["utazás", "repülőjegy", "körutak", "utazás", "hajóutak"])
  );
  answer = "";

  onClick(string) {
    switch (string) {
      case "utazás":
        this.answer = "ez csak akkor látszik, ha az utazásra kattintunk";
        break;
      case "repülőjegy":
        this.answer = "ez csak ha a repjegyre";
        break;
      case "körutak":
        this.answer = "ez csak ha a körutakra";
        break;
      case "hajóutak":
        this.answer = "ez csak ha a hajóutakra";
        break;
    }
  }
}
