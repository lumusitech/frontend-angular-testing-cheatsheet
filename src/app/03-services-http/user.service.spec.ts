import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { User } from '../models/user.interface';
import { UserService } from './user.service';

describe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('getUsers should return User[] with data', (done: DoneFn) => {
    const expectedUsers: User[] = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    userService.getUsers().subscribe(users => {
      expect(users).toEqual(expectedUsers)
      expect(users.length).toBeGreaterThan(1);
      expect(httpClientSpy.get.calls.count()).toBe(1);
      expect(users[0].name).toBe('Leanne Graham');
      done();
    });
  });

  it('userService.getUser() should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    // httpClientSpy.get.and.returnValue(throwError(errorResponse));
    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    userService.getUsers().subscribe(
      (users: User[]) => done.fail(),
      (error: HttpErrorResponse) => {
        expect(error).toBeDefined();
        expect(error.statusText).toContain('Not Found');
        done();
      }
    );
  });
});
