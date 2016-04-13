(function() {
   var app = angular.module('scheduleViewer', []);

   app.controller('scheduleViewerCtrl', function() {
      this.squads = akadGroups;
   });

   app.controller('panelCtrl', function() {
      this.panel = 1;

      this.setPanel = function(newClick) {
         this.panel = newClick;
      };

      this.isSet = function(panelNum) {
         return this.panel === panelNum;
      };

   });


   var akadGroups = [{
      'groups': ['АН-11Б', 'АН-12Б', 'АФ-13Б', 'АП-14Б', 'ФА-15Б', 'НА-16Б']
   }, {
      'groups': ['АН-21Б', 'АН-22Б', 'АФ-23Б', 'АП-24Б', 'ФА-25Б', 'НА-26Б']
   }, {
      'groups': ['АН-31Б', 'АН-32Б', 'АФ-33Б', 'АП-34Б', 'ФА-35Б', 'НА-36Б', 'ПАН-37Б']
   }, {
      'groups': ['АН-41Б', 'АН-42Б', 'АН-43Б', 'АФ-44Б', 'АП-45Б', 'ФА-46Б', 'НА-47Б']
   }, {
      'groups': ['АН-11С', 'АН-12С', 'АФ-13С', 'АП-14С', 'НА-15С', 'ПАН-16С']
   }, {
      'groups': ['АН-11М', 'АФ-12М', 'АП-13М', 'НА-14М', 'ФА-15М']
   }];

})();
