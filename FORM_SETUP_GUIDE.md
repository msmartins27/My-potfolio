# Contact Form Setup Guide

Your contact form is configured to send emails directly to you using **Formspree** - a free service that handles form submissions.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Sign up with your email: **ndasilwohendaalina@gmail.com**
4. Verify your email address

### Step 2: Create a New Form

1. After logging in, click "New Form" or "+ New Project"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Formspree will generate a unique Form ID (looks like: `xyzabc123`)

### Step 3: Update Your Website

1. Open `index.html` in a text editor
2. Find this line (around line 267):
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID from Formspree
4. Example:
   ```html
   <form class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```
5. Save the file

### Step 4: Test Your Form

1. Open `index.html` in your browser
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email (**ndasilwohendaalina@gmail.com**) for the message

## ✨ Features

- ✅ Emails sent directly to your inbox
- ✅ Free for up to 50 submissions per month
- ✅ Spam protection included
- ✅ No backend coding required
- ✅ Works with static websites

## 📧 What You'll Receive

When someone submits the form, you'll receive an email with:
- Sender's name
- Sender's email address
- Their message
- Submission timestamp

## 🔧 Alternative Option: mailto (Simple but Limited)

If you don't want to use Formspree, you can use a simple mailto link:

Replace the form action with:
```html
<form class="contact-form" action="mailto:ndasilwohendaalina@gmail.com" method="POST" enctype="text/plain">
```

**Note:** This opens the user's email client, which is less user-friendly.

## 💡 Formspree Free Plan Limits

- 50 submissions per month
- Email notifications
- Spam filtering
- File uploads (up to 10MB)

If you need more, upgrade to a paid plan ($10/month for 1000 submissions).

## 🆘 Troubleshooting

**Form not working?**
1. Make sure you replaced `YOUR_FORM_ID` with your actual Form ID
2. Check that your email is verified in Formspree
3. Look for any error messages in the browser console (F12)

**Not receiving emails?**
1. Check your spam/junk folder
2. Verify your email in Formspree settings
3. Make sure the form is properly configured in Formspree dashboard

## 📞 Need Help?

- Formspree Documentation: [https://help.formspree.io](https://help.formspree.io)
- Formspree Support: support@formspree.io

---

**Your Email:** ndasilwohendaalina@gmail.com

Once you complete the setup, your contact form will be fully functional! 🎉
