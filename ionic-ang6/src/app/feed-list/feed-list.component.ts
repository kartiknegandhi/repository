import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedListService } from './feed-list.service';
import { first } from 'rxjs/operators';
import { InfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  providers: [FeedListService]
})
export class FeedListComponent implements OnInit {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  pageNo: any;
  page: any;
  scrollPage: any;
  feedLists: any;
  mainFeedLists: any;
  getFeedlistRes: any;
  constructor(private feedListService: FeedListService) { }

  ngOnInit() {
    this.pageNo = 1;
    this.getFeedlistRes = Object.assign({});
    this.feedLists = new Array();
    this.page = new Array();
    this.mainFeedLists = new Array();
    this.scrollPage = 1;
    this.getFeedList(1);
  }

  getFeedList(page) {
    this.feedListService.getFeedList(page).subscribe(
      res => {
        this.getFeedlistRes = res;
        this.feedLists = this.getFeedlistRes['data'];
        this.page = this.getFeedlistRes['page']
        this.mainFeedLists = this.feedLists;
        console.log(this.feedLists);
      },
      error => {
        console.log('done loading error')
      }
    );
  }

  // pull to refresh
  doRefresh(event) {
    localStorage.removeItem('token');

    console.log('Pull to refresh,call getFeedlist');
    this.page = 1;
    this.scrollPage = 1;
this.mainFeedLists = [];
this.feedLists = [];


    this.feedListService.getFeedList(1).subscribe(
      res => {
        this.getFeedlistRes = res;
        this.feedLists = this.getFeedlistRes['data'];
        this.page = this.getFeedlistRes['page']
        this.mainFeedLists = this.feedLists;
        console.log(this.feedLists);
        event.target.complete()

      },
      res => {
        console.log('done loading error')
        event.target.complete()

      }
    );


  }

  // infinite scroll
  loadData(event) {
    this.scrollPage = this.scrollPage + 1;

    setTimeout(() => {
      console.log('Done');
      
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      
      this.feedListService.getFeedList(this.scrollPage)
      .subscribe(
        res => {
          this.getFeedlistRes = res;
          this.feedLists = this.getFeedlistRes['data'];
          this.page = this.getFeedlistRes['page'];
          console.log(this.page);
          console.log(this.page.total_rows / this.page.per_page)
          console.log(this.getFeedlistRes['data']);
          
          for (var i = 0; i < this.feedLists.length; i++) {
            console.log(this.feedLists[i]);
            this.mainFeedLists.push(this.feedLists[i]);
          }
          console.log(this.mainFeedLists);
          event.target.complete();
          
        },
        error =>
        console.log('Loading error')
      );
      {
        //   event.target.disabled = true;
      }
    }, 1000);
  }







}
