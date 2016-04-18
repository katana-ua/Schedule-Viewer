(function() {
   var app = angular.module('scheduleViewer', []);

   app.controller('scheduleViewerCtrl', function($scope) {
      this.squads = akadGroups;
      this.timetables = subjects;

      this.setTimetable = function(x, y, z) {
         this.timetable = [x, y, z];
      };

      /*$scope.subgroups = ['І підгрупа', 'ІІ підгрупа'];
      $scope.days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];*/
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
      groups: ['АН-11Б', 'АН-12Б', 'АФ-13Б', 'АП-14Б', 'ФА-15Б', 'НА-16Б']
   }, {
      groups: ['АН-21Б', 'АН-22Б', 'АФ-23Б', 'АП-24Б', 'ФА-25Б', 'НА-26Б']
   }, {
      groups: ['АН-31Б', 'АН-32Б', 'АФ-33Б', 'АП-34Б', 'ФА-35Б', 'НА-36Б', 'ПАН-37Б']
   }, {
      groups: ['АН-41Б', 'АН-42Б', 'АН-43Б', 'АФ-44Б', 'АП-45Б', 'ФА-46Б', 'НА-47Б']
   }, {
      groups: ['АН-11С', 'АН-12С', 'АФ-13С', 'АП-14С', 'НА-15С', 'ПАН-16С']
   }, {
      groups: ['АН-11М', 'АФ-12М', 'АП-13М', 'НА-14М', 'ФА-15М']
   }];

   var subjects = {
         an11Bsubgroup1: {
            monday: ['Фізвиховання (викл. Федак О.Г.)', 'Німецька мова (пр) (викл. Демберецька М.П.)'],
            tuesday: ['Англійська мова (пр) (доц. Удяк Г.І.)', 'Вступ до мовознавства (пр) (доц.Чобанюк М.М.)'],
            wednesday: ['Німецька мова (пр) (викл. Демберецька М.П.)', 'Латинська мова (пр) (ст.викл. Винар С.М.)', 'Німецька мова (пр) (викл. Демберецька М.П.)', 'Фізвиховання (викл. Федак О.Г.)'],
            thursday: ['----', 'Англійська мова (пр) (доц. Удяк Г.І.)', 'Англійська мова (пр) (доц. Удяк Г.І.)', 'Історія зарубіжної літератури (пр) (Маркова М.В.)'],
            friday: ['----', 'Англійська мова (пр) (доц. Удяк Г.І.)', 'Англійська мова (пр) (доц. Удяк Г.І.)']
         },
         an11Bsubgroup2: {
            monday: ['Фізвиховання (викл. Федак О.Г.)', 'Англійська мова (пр) (викл. Ковцуняк М.М.)', '----', 'Німецька мова (пр) (викл. Павлюх Н.М.)'],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: []
         },
         an12Bsubgroup1: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: []
         },
         an12Bsubgroup2: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: []
         },
         af13Bsubgroup1: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: []
         },
         af13Bsubgroup2: {
         },
         ap14Bsubgroup1: {
         },
         ap14Bsubgroup2: {
         },
         fa15Bsubgroup1: {
         },
         fa15Bsubgroup2: {
         },
         na16Bsubgroup1: {
         },
         na16Bsubgroup2: {
         }
      };

})();
