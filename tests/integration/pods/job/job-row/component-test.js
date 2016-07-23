/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'job/job-row',
  'Integration: JobRowComponent',
  {
    integration: true
  },
  function() {
     it('should render a job', function() {
      var job = Ember.Object.create({
        published_at: new Date(2001, 0, 1),
        title: 'a title',
        description: 'a description',
        tags: ['one', 'two'],
        link: 'a link'
      });
      this.set('model', job);
      this.render(hbs`{{job/job-row item=model}}`);
      var renderedText = this.$('.item-one-line').text();
      expect(renderedText).to.contain('a title');
      expect(renderedText).to.contain('one');
      expect(renderedText).to.contain('two');
      expect(renderedText).to.contain('01/01');
      expect(renderedText).not.to.contain('a description');
    });

    it('should render a selected job as expanded', function(){
      var job = Ember.Object.create({
        id: '1',
        date: new Date(2001, 0, 1),
        title: 'a title',
        description: 'a description',
        tags: ['one', 'two'],
        how_to_apply: 'how to apply',
        salary: 'salary',
        link: 'a link'
      });
      var selected = Ember.Object.create({ id: job.get('id') });

      this.set('model', job);
      this.set('selected', selected);
      this.render(hbs`{{job/job-row item=model selectedItem=selected}}`);
      var renderedText = this.$('.item-one-line').text();
      expect(renderedText).to.contain('a title');
      expect(renderedText).to.contain('a description');
      expect(renderedText).to.contain('salary');
      expect(renderedText).to.contain('how to apply');
    });

    it('should trigger expand action on clicking the title', function(){
      var job = Ember.Object.create({
        id: '1',
        title: 'a title'
      });

      this.set('model', job);
      this.render(hbs`{{job/job-row item=model expandAction='expand'}}`);
      let expandTrigged = false;
      this.on('expand', e => { expandTrigged = true; expect(e).to.equal(job) });

      this.$('.item-title').click();
      expect(expandTrigged).to.be.true;
    });

    it('should trigger collapse action on clicking the title if job was selected', function(){
      var job = Ember.Object.create({
        id: '1',
        title: 'a title'
      });
      var selected = Ember.Object.create({id: job.get('id')});

      this.set('model', job);
      this.set('selected', selected);
      this.render(hbs`{{job/job-row item=model selectedItem=selected collapseAction='collapse'}}`);
      let collapseTrigged = false;
      this.on('collapse', e => { collapseTrigged = true; expect(e).to.equal(job) });

      this.$('.item-title').click();
      expect(collapseTrigged).to.be.true;
    });
  }
);
