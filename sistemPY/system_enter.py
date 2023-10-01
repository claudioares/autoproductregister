import pyautogui as gui
import time



def systemEnter():
    time.sleep(3)
    gui.write('https://dlp.hashtagtreinamentos.com/python/intensivao/login')
    gui.press('enter')

    time.sleep(2)
    gui.click(x=512, y=398)
    gui.write('emailcadastrado@email.com')
    gui.press('tab')
    gui.write('uma_senha')
    gui.press('tab')
    gui.press('enter')

    time.sleep(3)
