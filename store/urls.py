from django.urls import path
from . import views

urlpatterns = [
    path('', views.store, name="store"),
    path('cart/', views.cart, name="cart"),
    path('checkout/', views.checkout, name="checkout"),
    path('success/', views.success, name="success"),
    path('fail/', views.fail, name="fail"),
    path('payment_complete/', views.payment_complete, name="payment_complete"),

    path('product/<slug>/', views.product, name='product'),

    path('update_item/', views.updateItem, name="update_item"),
    path('process_order/', views.processOrder, name="process_order"),
]
