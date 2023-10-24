import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  country = 'us';
  topic = 'general';
  topics: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ].sort();
  countries: any[] = [
    {
      isocodes: 'ae',
      country: 'United Arab Emirates',
    },
    {
      isocodes: 'ar',
      country: 'Argentina',
    },
    {
      isocodes: 'at',
      country: 'Austria',
    },
    {
      isocodes: 'au',
      country: 'Australia',
    },
    {
      isocodes: 'be',
      country: 'Belgium',
    },
    {
      isocodes: 'bg',
      country: 'Bulgaria',
    },
    {
      isocodes: 'br',
      country: 'Brazil',
    },
    {
      isocodes: 'ca',
      country: 'Canada',
    },
    {
      isocodes: 'ch',
      country: 'Switzerland',
    },
    {
      isocodes: 'se',
      country: 'Sweden',
    },
    {
      isocodes: 'sg',
      country: 'Singapore',
    },
    {
      isocodes: 'si',
      country: 'Slovenia',
    },
    {
      isocodes: 'sk',
      country: 'Slovakia',
    },
    {
      isocodes: 'kr',
      country: 'South Korea',
    },
    {
      isocodes: 'tw',
      country: 'Taiwan',
    },
    {
      isocodes: 'th',
      country: 'Thailand',
    },
    {
      isocodes: 'tr',
      country: 'Turkey',
    },
    {
      isocodes: 'tm',
      country: 'Turkmenistan',
    },
    {
      isocodes: 'tv',
      country: 'Tuvalu',
    },
    {
      isocodes: 'ug',
      country: 'Uganda',
    },
    {
      isocodes: 'ua',
      country: 'Ukraine',
    },
    {
      isocodes: 'gb',
      country: 'United Kingdom',
    },
    {
      isocodes: 'us',
      country: 'United States',
    },
    {
      isocodes: 'vn',
      country: 'Vietnam',
    },
    {
      isocodes: 'za',
      country: 'South Africa',
    },
    {
      isocodes: 'co',
      country: 'Colombia',
    },
    {
      isocodes: 'mx',
      country: 'Mexico',
    },
    {
      isocodes: 've',
      country: 'Venezuela',
    },
  ].sort((a, b) => {
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;
    return 0;
  });

  @Output() selectedParams = new EventEmitter();

  getNews(): void {
    const PARAMS = {
      topic: this.topic,
      country: this.country,
    };

    this.selectedParams.emit(PARAMS);
  }
}
