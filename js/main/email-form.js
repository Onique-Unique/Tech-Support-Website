document.getElementById("gamelounge-contact").innerHTML = `<i class="far fa-times-circle form-exit"></i>
<h3> Contact us</h3>
<div class="form-text-h4">
    <h4>Become a page moderator or offer suggestions</h4>
    <h4 id="last-h4"><i class="fas fa-clipboard-check"></i><i class="fas fa-gifts"></i> Get rewarded for your contributions..</h4>
</div>
<!--  -->
<input type="hidden" name="_subject" value="There's A New Email From Gamelounge">
<input type="hidden" name="_autoresponse" value="This is an Automated response. A Team Member will reach out to you shortly">
<input type="hidden" name="_next" value="https://www.feenixbloom.com/main-pages/apex-mobile/game-lounge-thankyou">

<!--  -->
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_template" value="table">
<fieldset>
    <input name="name" placeholder="Your name" type="text" tabindex="1" required autofocus>
</fieldset>
<fieldset>
    <input name="email" placeholder="Your Email Address" type="email" tabindex="2" required>
</fieldset>
<fieldset>
    <textarea name="message" placeholder="Type your message here...." tabindex="5" required></textarea>
</fieldset>
<fieldset>
    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
</fieldset>
<p class="copyright">Powered by <a href="https://www.feenixbloom.com" target="_blank" title="Colorlib">Feenixbloom</a></p>`