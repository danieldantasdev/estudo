/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, ElementRef, Input, OnInit, Output, QueryList, Renderer2, ViewChildren, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss'],
})
export class TinderCardComponent implements OnInit {
  @Input('cards') cards: Array<{
    img: string,
    name: string,
    age: string
  }>;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;
  matchFound;
  haveSuperLike: boolean;

  constructor(private renderer: Renderer2, private modalController: ModalController, private router: Router) {
  }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart == 'like') {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(30deg)');
      this.toggleChoiceIndicator('like');
      console.log("USER CLICK = LIKE");
      setTimeout(() => {
        this.heartVisible = false;
      }, 100);
    } else if (heart == 'dislike') {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
      this.toggleChoiceIndicator('dislike');
      console.log("USER CLICK = DISLIKE");
      setTimeout(() => {
        this.crossVisible = false;
      }, 100);
    } else if (heart == 'superlike') {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translateY(' + -this.moveOutWidth + 'px)');
      this.toggleChoiceIndicator('superlike');
      console.log("USER CLICK = SUPERLIKE");
      this.haveSuperLike = true;
      setTimeout(() => {
        this.haveSuperLike = false;
      }, 100);
    };
    this.shiftRequired = true;
    this.transitionInProgress = true;
  };

  handlePan(event) {
    if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length) return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) {
      this.toggleChoiceIndicator('like');
      setTimeout(() => {
        this.heartVisible = false;
      }, 100);
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator('dislike')
      setTimeout(() => {
        this.crossVisible = false;
      }, 100);
    }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');

    this.shiftRequired = true;
  };

  handlePanEnd(event) {

    console.log("EVENT = ", event);

    // this.toggleChoiceIndicator(false, false);

    if (!this.cards.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
      this.shiftRequired = false;
    } else {
      let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');

      this.shiftRequired = true;

      console.log("HANDLE PAN");
    }
    this.transitionInProgress = true;
  };

  toggleChoiceIndicator(value) {
    this.crossVisible = value == 'dislike' ? true : false;
    this.heartVisible = value == 'like' ? true : false;
    this.haveSuperLike = value == 'superlike' ? true : false;
  };

  handleShift() {
    this.transitionInProgress = false;
    // this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    }
  }


  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }

  // superLike() {
  //     this.haveSuperLike = true;
  //     setTimeout(() => {
  //         this.haveSuperLike = false;
  //     }, 1000);
  // }

  openInfo(card) {
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(card)
      }
    };
    console.log(card);
    this.router.navigate(['info'], navData);
  }

  ngOnInit() {

  }
}
