import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';

describe('hero detail component test', () => {
  let comp: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent]
    });

    fixture = TestBed.createComponent(HeroDetailComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));

    el = de.nativeElement;
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});
