import { NgModule } from '@angular/core';
import { OneTrustModule, OneTrustService } from '@altack/ngx-onetrust';

@NgModule({
  imports: [
    OneTrustModule.forRoot({
      cookiesGroups: {
        StrictlyNecessaryCookies: 'C0001',
        PerformanceCookies: 'C0002',
        FunctionalCookies: 'C0003',
        TargetingCookies: 'C0004',
        SocialMediaCookies: 'C0005'
      },
      domainScript: 'your-domain-script-id'
    })
  ]
})
export class OneTrusPluginModule {
  constructor(oneTrust: OneTrustService) {
    oneTrust.loadOneTrust();
  }
}
  