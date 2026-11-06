/**
 * הגדרות דף הנחיתה – זה הקובץ היחיד שצריך לערוך בלי לגעת בקוד הדף.
 * כל ערך ריק ('' או []) = התכונה כבויה והדף ממשיך לעבוד כרגיל.
 */
window.LANDING_CONFIG = {
  // וואטסאפ וטלפון (מספר בינלאומי בלי + ובלי מקפים)
  whatsappNumber: '972546238888',
  phoneTel: '0546238888',

  // כתובת Web App של Google Apps Script (ראה SETUP.md).
  // כל עוד השדה ריק, הטופס לא שולח לשום מקום אלא מציג כפתור וואטסאפ עם הפרטים מוכנים.
  leadEndpoint: 'https://script.google.com/macros/s/AKfycbwzSJAARnMAE8Am51ScB1UCZG1LmB598pZ7zuLYS63AsivckDhFACE02wGRIHQ_V2_I/exec',

  // מזהי פיקסלים לקמפיין הממומן. ריק = לא נטען.
  metaPixelId: '',
  tiktokPixelId: '',

  // המלצות אמיתיות בלבד! כל עוד המערך ריק, אזור ההמלצות לא מוצג בדף.
  // דוגמה: { text: 'עברתי טסט ראשון, מורן סבלני בטירוף', name: 'נועה, באר שבע' }
  testimonials: []
};
