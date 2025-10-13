# יובל סיטי — בניית דפי נחיתה

דף נחיתה מדהים עם אסתטיקה של Liquid Glass בהשראת עיצוב iOS.

## 🎨 עיצוב

- **גרדיאנט כהה**: רקע #0C0D10 → #181A20
- **זכוכית נוזלית**: פאנלים שקופים עם blur ואפקטים
- **צבעי מבטא**: טורקיז (#00C9A7) וכתום ניאון (#FF7A00)
- **טיפוגרפיה**: Heebo (כותרות) ו-Rubik (גוף)
- **תמיכה מלאה ב-RTL** לעברית

## 📁 מבנה

```
src/
├── components/
│   ├── ui/              # קומפוננטות בסיס (shadcn)
│   ├── sections/        # סקשנים של הדף
│   │   ├── Hero.tsx
│   │   ├── Showcase.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── GlassCard.tsx    # כרטיס זכוכית
│   ├── LiquidBlob.tsx   # אלמנט אנימטיבי
│   ├── Container.tsx
│   ├── SectionHeading.tsx
│   └── ProjectModal.tsx
├── data/
│   └── demoItems.ts     # נתוני פרויקטים לדוגמה
└── pages/
    └── Index.tsx        # דף הבית
```

## 🎯 סקשנים

1. **Hero**: כותרת מרכזית + 2 קריאות לפעולה
2. **Showcase**: גלריית 8 פרויקטים עם modal
3. **Process**: 4 שלבי תהליך העבודה
4. **Testimonials**: 3 המלצות לקוחות
5. **Final CTA**: קריאה לפעולה סופית עם כפתור וואטסאפ
6. **Footer**: פוטר מינימלי עם פרטי קשר

## ✏️ התאמה אישית

### עריכת פרטי הקשר

**קישור וואטסאפ** (מופיע ב-Hero, Modal, FinalCTA):
```tsx
// החלף את המספר בכל הקבצים:
href="https://wa.me/972500000000"
```

**מייל** (Footer):
```tsx
href="mailto:contact@yuvalcity.com"
```

### עדכון נתוני פרויקטים

ערוך את `src/data/demoItems.ts`:
```typescript
{
  id: "project-id",
  title: "שם הפרויקט",
  category: "קטגוריה",
  description: "תיאור קצר",
  concept: "קונספט עיצובי מפורט",
  image: "/path/to/image.jpg",
  tags: ["תגית1", "תגית2"]
}
```

### החלפת תמונות

1. הוסף תמונות ל-`public/images/`
2. עדכן את ה-`image` path ב-`demoItems.ts`
3. או השתמש בשירות חיצוני (Cloudinary, ImgIX)

### שינוי צבעים

ערוך את `src/index.css`:
```css
:root {
  --primary: 169 100% 39%;    /* טורקיז */
  --secondary: 24 100% 50%;   /* כתום */
}
```

### התאמת אנימציות

ב-`tailwind.config.ts` תחת `animation`:
```typescript
animation: {
  "float": "float 6s ease-in-out infinite",
}
```

## 🚀 הרצה מקומית

```bash
npm install
npm run dev
```

## 📦 טכנולוגיות

- **React 18** + **TypeScript**
- **Vite** - כלי build מהיר
- **Tailwind CSS** - עיצוב utility-first
- **Framer Motion** - אנימציות
- **shadcn/ui** - קומפוננטות UI
- **Lucide React** - אייקונים

## 🎨 עיצוב מותאם

הפרויקט משתמש ב-design system מלא שמוגדר ב:
- `src/index.css` - משתני CSS וכלי utility
- `tailwind.config.ts` - הגדרות Tailwind
- `src/components/ui/button.tsx` - וריאנטים של כפתורים

## 💡 טיפים

- **וריאנטים של כפתורים**: `hero`, `glass`, `default`, `outline`
- **RTL אוטומטי**: כל הטקסט בעברית מיושר לימין
- **ריספונסיבי מלא**: עובד מושלם ממובייל ועד דסקטופ
- **אנימציות חלקות**: Framer Motion עם viewport detection

---

בנוי עם ❤️ על ידי Lovable
