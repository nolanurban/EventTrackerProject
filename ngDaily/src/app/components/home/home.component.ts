import { Component, OnInit } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Activity } from 'src/app/models/activity';
import { Daily } from 'src/app/models/daily';
import { User } from 'src/app/models/user';
import { DailyService } from 'src/app/services/daily.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activitySelect: Activity[]=[];
  daily: Daily[] = [];
  editDaily: Daily | null= new Daily();
  newDaily: Daily = new Daily();
  selectedDaily: Daily | null = null;
  editEntry: boolean = false;
  selectedNewActivity: Activity | undefined= new Activity();

  constructor(
    private dailyService: DailyService
  ) { }


  loadDaily() {
    this.dailyService.index().subscribe({
      next: (dailyList) => {
        console.log(dailyList);
        this.daily = dailyList;
      },
      error: (fail) => {
        console.error("loadDaily: problem retrieving index");
      }
    })
  }

  handleClick(d: Daily) {
    console.log("HERE IT IS ");
    console.log(d);
    this.selectedDaily = d;
  }
  populateActivityArray() {
    this.dailyService.fetchActivities().subscribe({
      next: (activityList) => {
        console.log('here is the activities:' + activityList);
        this.activitySelect = activityList;
        for (let a of this.activitySelect)
          console.log(a.id + " " + a.name);
      },
      error: (fail) => {
        console.error("loadDaily: problem retrieving index");
      }
    });
  }

  createUser(): User {
    return new User(1, 'nollie', 'nollie');
  }
  addDaily(daily: Daily) {
    console.log("this is what we are trying to create");
    if (this.selectedNewActivity)
      daily.activity = this.selectedNewActivity;



    daily.user = this.createUser();
    console.log("USER SET");
    console.log(daily);

    this.dailyService.create(daily).subscribe({
      next: (data) => {
        this.loadDaily();
      },
      error: (fail) => {
        console.error('DailyListComponent.reload: error creating daily');
        console.error(fail);
      }
    });
    this.newDaily = new Daily();
  }
  setNewActivity(option: any) {
    this.selectedNewActivity = this.activitySelect.find(elem => elem.id == option.value);
    console.log("this is the newly selected acitvity");
    console.log(this.selectedNewActivity)
  }

  setUpdateDaily(): void {
    this.editDaily = Object.assign({}, this.selectedDaily);
    console.log('TRYING TO SET THE UPDATE');
    console.log(this.editDaily);
    console.log(this.selectedDaily!.id + ' should be equal to ' + this.editDaily.id);
  }

  showObjectFields(daily: Daily) {
    console.log("--- SHOWING OBJ FIELDS ---");
    console.log("ID: " + daily.id);
    console.log("Description: " + daily.description);
    console.log("Date: " + daily.date);
    console.log("IMG URL: " + daily.imageUrl);

    console.log("Activity ID: " + daily.activity.id);
    console.log("Activity Name: " + daily.activity.name);
    console.log("User ID: " + daily.user.id);
    console.log("User Password: " + daily.user.username);
    console.log("User Username : " + daily.user.password);
  }

  updateDaily(id: number, daily: Daily): void {
    console.log(id + " updating with " + daily);

    this.dailyService.update(id, daily).subscribe({
      next: (data) => {
        console.log('updateDaily: updating entry');
        this.editDaily = null;
        this.loadDaily();

      },
      error: (fail) => {
        console.error('updateDaily: error updating entry');
        console.error(fail);
      }

    })

 }
 deleteDaily(dailyId: number) {
  this.dailyService.destroy(dailyId).subscribe({
    next: (data) => {
      this.loadDaily();
    },
    error: (fail) => {
      console.error('TodoListComponent.reload: error getting todos');
      console.error(fail);
    }
  })
}


  ngOnInit(): void {
    this.loadDaily();
    this.populateActivityArray();
    this.newDaily = new Daily();
  }

}

